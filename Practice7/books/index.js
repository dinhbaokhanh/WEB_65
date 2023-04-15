import getDb, { DB } from "../database/index.js";
import { ObjectId } from 'mongodb'
const bookController = {
    createBook: async(req, res) => {
        try {
            const { idAuthor } = req.params;
            const book = {
                ...req.body,
                idAuthor: new ObjectId(idAuthor)
            }

            const model = (await getDb()).db(DB.DB_NAME).collection(DB.COLLECTIONS.BOOKS);
            const createBook = await model.insertOne(book);
            if(!createBook.acknowledged) throw new Error('Failed');
            
            const author = (await getDb()).db(DB.DB_NAME).collection(DB.COLLECTIONS.AUTHORS);
            const update = await author.findOneAndUpdate({
                _id: new ObjectId(idAuthor)
            }, {
                $push: {
                    listBook: { 
                        listBook: { $each: [createBook.insertedId]}
                     }
                }
            })
        
            res.status(201).send({
                message: 'Success',
                data: update
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    },

    getInfo: async(req, res) => {
        try {
            const { idBook } = req.params;
            const model = (await getDb()).db(DB.DB_NAME).collection(DB.COLLECTIONS.BOOKS);
            const book = model.aggregate([
                {
                    $match : {
                         _id: new ObjectId(idBook)
                    }
                },
                {
                    $lookup: {
                        from: DB.COLLECTIONS.AUTHORS,
                        localField: 'idAuthor',
                        foreignField: '_id',
                        as: 'author'
                    }
                }
            ])
    
            res.status(200).send({
                message: 'Success',
                data: book
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
}

export default bookController;