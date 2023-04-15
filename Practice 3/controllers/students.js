const listStudent = [
    {
        id: 1,
        name: 'Nobita',
        age: 5
    },
    {
        id: 2,
        name: 'Doraemon',
        age: 5
    },
    {
        id: 3,
        name: 'Jaien',
        age: 2
    },
    {
        id: 4,
        name: 'Jaien',
        age: 5
    }
]
const studentsController = {
    get: (req, res) => {
        const { age } = req.query;
        if (age) {
            const students = listStudent.filter(item => item.age === Number(age));
            res.send({
                data: students,
                message: students.length > 0 ? 'Thành công!' : 'Không có dữ liệu thỏa mãn!',
            })
        } else {
            res.send(listStudent);
        }
    },
    insert: (req, res) => {
        try {
            const options = req.query;
            if (options.q) {
                if (options.q === 'ONE') listStudent.push(req.body);
                else if (options.q === 'MANY') {
                    if (!Array.isArray(req.body)) throw new Error('Bạn cần truyền 1 mảng học sinh với options MANY!');
                    listStudent.push(...req.body);
                }
                res.status(201).send({
                    message: 'Thành công!',
                    listStudent
                })
            } else {
                if (!req.body.id) throw new Error('Id là bắt buộc!');
                res.status(201).send({
                    message: 'Thành công!',
                    listStudent
                })
            }
        } catch (error) {
            res.send({
                messsage: 'Thất bại!',
                error: error.message
            });
        }
    },
    updateOne: (req, res) => {
        try {
            const { id } = req.params;
            const findIdx = listStudent.findIndex((item) => item.id === Number(id));
            if (findIdx >= 0) {
                listStudent[findIdx] = {
                    ...listStudent[findIdx],
                    ...req.body
                }
            } else {
                throw new Error('Không tìm thấy!');
            }
            res.status(201).send({
                message: 'Thành công!',
                data: listStudent
            })
        } catch (error) {
            res.status(403).send({
                message: 'Thất bại!',
                error: error.message
            })
        }
    },
    updateMany: (req, res) => {
        try {
            const { OPTIONS } = req.query;
            const { range, data } = req.body;
            /**
             * range: [start index, end index]
             * listId: [những id cần cập nhật]
             * ALL
             */

            if (!data) throw new Error('Bạn chưa gửi data!');
            switch (OPTIONS) {
                case 'RANGE':
                    if (!Array.isArray(range)) throw new Error('Bạn cần gửi lên mảng [start index, end index]!');
                    if (range.length < 2) throw new Error('Mảng cần >= 2 giá trị');
                    let checkNumberItem = true;
                    for (let i = 0; i < range.length; i++) {
                        if (!Number(range[i])) {
                            checkNumberItem = false;
                            break;
                        };
                    }
                    if (!checkNumberItem) throw new Error('Phần tử của mảng phải là số!');
                    for (let i = range[0]; i <= range[range.length - 1]; i++) {
                        listStudent[i] = {
                            ...listStudent[i],
                            ...data
                        }
                    }
                    break;

                case 'ALL':
                    listStudent.forEach(item => {
                        listStudent[item] = {
                            ...listStudent[item],
                            data
                        }
                    });
                    break;

                default:
                    break;
            }
            res.send({
                data: listStudent
            })
        } catch (error) {
            res.status(403).send({
                message: 'Thất bại!',
                error: error.message
            })
        }
    }
}
export default studentsController;

/**
 * get -> get theo api, params, query
 * post -> gửi dữ liệu, query, params, nhận body,
 * put -> params, query, body
 * delete -> params,query
 */