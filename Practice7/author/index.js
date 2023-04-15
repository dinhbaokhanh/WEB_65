import { ObjectId } from "mongodb";
import getDb, { DB } from "../database/index.js";

const authorController = {
    register: async (req, res) => {
        try {
            const infoAuthor = req.body;
            const model = (await getDb()).db(DB.DB_NAME).collection(DB.COLLECTIONS.AUTHORS)
            const createAuthor = await model.insertOne(infoAuthor);
            if(!createAuthor.acknowledged) throw new Error('Failed');
            
            (await getDb()).close().then((rs) => {
                console.log('Database closed');
            });
            res.status(201).send({
                message: 'Success',
                data: createAuthor
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
        
    },

    getInfo: async (req, res) => {
        try {
            const { idAuthor } = req.params;
            const { fields } = req.query;
            
            const model = (await getDb()).db(DB.DB_NAME).collection(DB.COLLECTIONS.AUTHORS)
            const author = await model.aggregate([
                {
                    $match: {
                        _id: new ObjectId(idAuthor)
                    }
                },
                {
                    $unwind: '$listbook'
                },
                {
                    $lookup: {
                        localField: 'listBook',
                        from: DB.COLLECTIONS.BOOKS,
                        foreignField: '_id',
                        as: 'detailBook'
                    }
                },
                ...!fields || (fields && Object.keys(fields).length === 0) ? 
                    [] : 
                    [
                        {
                            $project: {
                                ...spltStringtoPrjection(fields)
                            }
                        }
                    ]
            ])
            res.status(200).send({
                message: 'Success',
                author: await author.toArray()
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
}
const spltStringtoPrjection = (str) => {
    const fieldsProject = {};
    if(str.toString().includes(',')){
        const arrFields = str.split(',');
        arrFields.forEach((item) => {
            fieldsProject[item.trim()] = 1
        });
    } else {
        fieldsProject[str.trim()] = 1
    }

    return fieldsProject;
}
export default authorController;