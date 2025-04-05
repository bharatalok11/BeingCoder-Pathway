import FeedBack from "../models/feedback.model.js";


const addFeedback = async (req, res) => {
    try {
      const fromId = req.user._id; // renamed to match schema
      const toId = req.params.id;
      const {type}=req.params.type;
      const { feedback } = req.body;
  
      const feed = await FeedBack.create({
        fromId,
        toId,
        type,
        feedback,
      });
  
      return res.status(200).json({
        message: "Successfully created",
        feed,
        success: true,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };



  const editFeedback = async (req, res) => {
    try {
      const userId = req.user._id;
      const feedId = req.params.id;
      const { feedback } = req.body; // assuming you want to update the feedback text
  
      const feed = await FeedBack.findOneAndUpdate(
        { _id: feedId, fromId: userId }, // ensures only the author can edit
        { feedback },
        { new: true }
      );
  
      if (!feed) {
        return res.status(404).json({
          message: "Feedback not found or you're not authorized to edit it.",
          success: false,
        });
      }
  
      return res.status(200).json({
        message: "Feedback updated successfully",
        feed,
        success: true,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
        success: false,
      });
    }
  };
  
export {
    addFeedback,
    editFeedback
}