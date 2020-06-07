import model from '../models';

const {
    education: EducationModel
} = model;

export default class EducationController {

    getEducationalBackgroundById = async (req, res) => {
        const education = await EducationModel.findOne({
            where: {
                id: req.params
            }
        });

        if (education) {
            return res.status(200).json({
                educationalBackground: education,
            });
        }

        return res.status(404).json({
            error: 'No educational background was found with specified id.',
        });
    };

    getEducationalBackground = async (req, res) => {
        const education = await EducationModel.findAll();
        if (education) {
            return res.status(200).json({
                educationalBackground: education,
            });
        }

        return res.status(404).json({
            error: 'No educational background',
        });
    };

    addEducationalBackground = async (req, res) => {
        const education = await EducationModel.create({
            ...req.body,
            userId: req.user,
        }, {
            returning: true,
        }, );

        return res.status(201).json({
            education: education,
        });
    };

    updateEducationalBackground = async (req, res) => {
        const {
            id
        } = req.params;

        await EducationModel.update(req.body, {
            where: {
                id,
            },
        });

        const education = await EducationModel.findOne({
            where: {
                id,
            },
        });

        if (education) {
            return res.status(200).json({
                education,
            });
        }

        return res.status(404).json({
            error: 'The educational background you are trying to update does not exist.',
        });
    };

    deleteEducationalBackground = async (req, res) => {
        const education = await EducationModel.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (education) {
            await education.destroy();
            return res.status(200).json({
                message: 'Educational background was successfully deleted.',
            });
        }

        return res.status(404).json({
            error: 'The educational background you are trying to delete does not exist.',
        });
    };
}