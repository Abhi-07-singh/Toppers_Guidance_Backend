const topper_card_details_model = require("../Model/topper_card_details")

exports.get_toppers = async (req, res) => {

    try {
        const toppers = await topper_card_details_model.find({})
        res.status(200).send(toppers)
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"this error form backend"})
        
    }

}
