import Appointment from "../models/appointment.model.js"; // Update path as needed

export const BookAppointMent = async (req, res) => {
  try {
    const userId = req.user._id;
    const { timing } = req.body;
    const doctorId = req.params.doctorId?.trim();


    console.log({ userId, timing, doctorId });
    if (!userId || !timing || !doctorId) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // Check if doctor is already booked for that time
    const isAvailable = await Appointment.findOne({
      doctorId,
      timing: new Date(timing)
    });

    if (isAvailable && isAvailable.status === "pending") {
      return res.status(409).json({
        success: false,
        message: "Doctor is already booked at this time",
      });
    }

    const newApp = await Appointment.create({
      userId,
      doctorId,
      timing: new Date(timing),
      status: "pending"
    });

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment: newApp,
    });

  } catch (error) {
    console.error("Booking Error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};



export const cancelAppointment = async (req, res) => {
  try {
    const userId = req.user._id;
    const { appointmentId } = req.params;

    const appointment = await Appointment.findOne({
      _id: appointmentId,
      userId: userId,
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found or unauthorized",
      });
    }

    appointment.status = "completed";
    await appointment.save();

    return res.status(200).json({
      success: true,
      message: "Appointment cancelled (marked as completed)",
      appointment,
    });
  } catch (error) {
    console.error("Cancel Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
