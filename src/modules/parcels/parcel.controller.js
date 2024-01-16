const sendMailer = require("../../utilities/sendMailer/sendMailer");
const { ParcelService } = require("./parcel.service");

// API controller for insert a new parcel -
const createParcel = async (req, res) => {
  try {
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to create parcel for the given email address");
    }

    const parcel = await ParcelService.createParcel(req.body);

    if (parcel) {
      const mailResponse = await sendMailer(parcel);

      if (mailResponse.success) {
        res.status(200).json(parcel);
      } else {
        res.status(400).send("Failed to send mail to creating parcel");
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Parcel",
      error: error.message,
    });
  }
};

// API controller for get all parcels -
const getAllParcel = async (req, res) => {
  try {
    const decoded = req.decoded;

    if (decoded.role !== "admin" && decoded.role !== "rider") {
      return res.status(403).send("Forbidden access to get all parcels");
    }

    const result = await ParcelService.getAllParcel();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Parcel",
      error: error.message,
    });
  }
};

// API controller for get parcel data by parcelId
const getParcelByID = async (req, res) => {
  try {
    const parcelId = req.params.id;

    const result = await ParcelService.getParcelById(parcelId);

    if (result?.length === 0) {
      res.status(404).json({
        message: "No parcel found for the given parcelId",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get Parcel info by ID",
      error: error.message,
    });
  }
};

// API controller for get parcels by email
const getParcelsByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to parcels for the given email");
    }

    const result = await ParcelService.getParcelsByEmail(email);

    if (result?.length === 0) {
      res.status(404).json({
        message: "No parcels found for the given email",
        data: [],
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get parcels by email",
      error: error.message,
    });
  }
};

// API controller for update parcel info by _id
const updateParcelInfoById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to update parcel info for the given id");
    }

    const option = { new: true };
    const updatedData = {
      $set: {
        recipientInfo: { ...data.recipientInfo },
        description: data.description,
      },
    };

    const result = await ParcelService.updateParcelInfoById(
      id,
      updatedData,
      option
    );

    if (result) {
      const mailResponse = await sendMailer(result);
      if (mailResponse.success) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Failed to send mail to updating parcel info");
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating parcel info by ID",
      error: error.message,
    });
  }
};

// API controller for parcel status update by _id
const updateParcelStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const decoded = req.decoded;

    if (!decoded.role === "admin" || !decoded.role === "rider") {
      return res
        .status(403)
        .send("Forbidden access to update parcel status for the given id");
    }

    const option = { new: true };
    const updatedData = {
      $set: {
        parcelStatus: data.parcelStatus,
      },
    };

    const result = await ParcelService.updateParcelStatusById(
      id,
      updatedData,
      option
    );

    if (result) {
      const mailResponse = await sendMailer(result);
      if (mailResponse.success) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Failed to send mail to updating parcel status");
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating parcel status by ID",
      error: error.message,
    });
  }
};

// API controller for parcel status payment update by _id
const updateParcelPaymentStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send(
          "Forbidden access to update parcel payment status for the given id"
        );
    }

    const option = { new: true };
    const updatedData = {
      $set: {
        "paymentInfo.status": data.status,
      },
    };

    const result = await ParcelService.updateParcelPaymentStatusById(
      id,
      updatedData,
      option
    );

    if (result) {
      const mailResponse = await sendMailer(result);
      if (mailResponse.success) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Failed to send mail to updating parcel status");
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to updating parcel payment status by ID",
      error: error.message,
    });
  }
};

// API controller for delete parcel by _id
const deleteParcelById = async (req, res) => {
  try {
    const id = req.params.id;
    const decoded = req.decoded;

    if (!decoded.email) {
      return res
        .status(403)
        .send("Forbidden access to delete parcel for the given id");
    }

    const result = await ParcelService.deleteParcelById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete parcel by ID",
      error: error.message,
    });
  }
};

module.exports.ParcelController = {
  createParcel,
  getAllParcel,
  getParcelByID,
  getParcelsByEmail,
  updateParcelInfoById,
  updateParcelStatusById,
  updateParcelPaymentStatusById,
  deleteParcelById,
};
