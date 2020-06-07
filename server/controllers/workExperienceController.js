import model from '../models';

const {
    job: JobModel
} = model;

export default class WorkExperienceController {
    getWorkExperienceById = async (req, res) => {
        const experience = await JobModel.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (experience) {
            return res.status(200).json({
                workExperience: experience,
            });
        }
        return res.status(404).json({
            error: 'No work experience was found with the provided id.',
        });
    };
    getWorkExperience = async (req, res) => {
        const jobs = await JobModel.findAll({
            order: [
                ['endDate', 'DESC'],
                ['startDate', 'DESC']
            ]
        });

        if (jobs) {
            return res.status(200).json({
                jobs,
            });
        }
        return res.json({
            error: ' They have not been hired yet.',
        });
    };

    addNewWorkExperience = async (req, res) => {
        const experience = await JobModel.create({
            ...req.body,
            userId: req.user,
        }, {
            returning: true,
        });

        return res.status(201).json({
            workExperience: experience.dataValues,
        });
    };

    updateWorkExperience = async (req, res) => {
        const {
            id
        } = req.params;

        let experience = await JobModel.update(req.body, {
            where: {
                id,
            },
        });

        if (experience) {
            experience = await JobModel.findOne({
                where: {
                    id,
                },
            });

            return res.status(200).json({
                message: 'Work experience has been successfully updated.',
                workExperience: experience.dataValues,
            });
        }

        return res.status(404).json({
            error: 'the work experience you are trying to update does not exist.',
        });
    };

    deleteWorkExperience = async (req, res) => {
        const {
            id
        } = req.params;

        const workExperience = await JobModel.findOne({
            where: {
                id,
            },
        });

        if (workExperience) {
            await workExperience.destroy();
            res.status(204).json({
                message: 'Work experience has been successfully removed from the profile.',
            });
        }

        return res.status(400).json({
            error: "The work experience you are trying remove does not exist."
        })
    };
}