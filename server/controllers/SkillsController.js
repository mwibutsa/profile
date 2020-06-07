import model from '../models';

const {
    skills: SkillsModel
} = model;

export default class SkillsController {
    getSkillsById = async (req, res) => {
        const skills = await SkillsModel.findOne({
            where: {
                id: req.params.id
            }
        });

        if (skills) {
            return res.status(200).json({
                skills,
            });
        }

        return res.status(404).json({
            error: 'No skills were found with specified id.',
        });
    };

    getSkills = async (req, res) => {
        const skills = await SkillsModel.findAll();

        if (skills) {
            return res.status(200).json({
                skills,
            });
        }

        return res.status(404).json({
            error: 'No skills were found.',
        });
    };

    addSkills = async (req, res) => {
        const skills = await SkillsModel.create({
            ...req.body,
            userId: req.user
        }, {
            returning: true
        }, );
        return res.status(201).json({
            addedSkill: skills,
        });
    };

    updateSkills = async (req, res) => {
        const {
            id
        } = req.params;

        await SkillsModel.update(req.body, {
            where: {
                id
            }
        });

        const skills = await SkillsModel.findOne({
            where: {
                id
            }
        });
        if (skills) {
            return res.status(200).json({
                message: 'Skills were successfully updated.',
                skills
            });
        }

        return res.status(404).json({
            error: 'The skills you are trying to update were not found.',
        });
    };

    deleteSkills = async (req, res) => {
        const skills = await SkillsModel.findOne({
            where: {
                id: req.params.id
            }
        });

        if (skills) {
            await skills.destroy();
            return res.status(200).json({
                message: 'Skills were successfully updated.',
            });
        }

        return res.status(404).json({
            error: 'The skills you are trying to delete do not exist.',
        });
    };
}