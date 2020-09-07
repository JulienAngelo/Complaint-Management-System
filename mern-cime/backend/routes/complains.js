const router = require('express').Router()
let Complain = require('../models/complain.model')

router.route('/').get((req, res) => {
    Complain.find()
        .then(complains => res.json(complains))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const refNo = req.body.refNo
    const fullname = req.body.fullname
    const phonenumber = req.body.phonenumber
    const nic = req.body.nic
    const date = req.body.date
    const description = req.body.description
    const dateofincident = req.body.dateofincident
    const personsinvolved = req.body.personsinvolved
    

    const newComplain = new Complain({
        refNo,
        fullname,
        phonenumber,
        nic,
        date,
        description,
        dateofincident,
        personsinvolved,
        
    })

    newComplain.save()
        .then(() => res.json('Complaint added!'))
        .catch(err => res.status(400).json('Error :' + err))
})

router.route('/:id').get((req, res) => {
    Complain.findById(req.params.id)
        .then(complain => res.json(complain))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    Complain.findByIdAndDelete(req.params.id)
        .then(() => res.json('Complaint deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').post((req, res) => {
    Complain.findById(req.params.id)
        .then(complain => {
            complain.refNo = req.body.refNo;
            complain.fullname = req.body.fullname
            complain.phonenumber = req.body.phonenumber
            complain.nic = req.body.nic
            complain.date = req.body.date
            complain.description = req.body.description
            complain.dateofincident = req.body.dateofincident
            complain.personsinvolved = req.body.personsinvolved
            

            complain.save()
                .then(() => res.json('Complaint updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;