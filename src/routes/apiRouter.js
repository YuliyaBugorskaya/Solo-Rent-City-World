import express from 'express';
import { TimeoutError } from 'sequelize';
import { Apartmen, User } from '../db/models';

const router = express.Router();

router.post('/addapartment', async (req, res) => {
  const {
    ap_name, rooms, description, link,
  } = req.body;
  console.log('req.body', req.body);
  const newApartment = await Apartmen.create({

    user_id: req.session.user.id,
    ap_name,
    description,
    rooms,
    link,
  });

  res.sendStatus(200);
});

router.get('/addapartment', async (req, res) => {
  const masapArtments = await Apartmen.findAll();
  console.log('masapArtments---', masapArtments);
  res.json(masapArtments);
});

router.get('/apartments', async (req, res) => {
  const masapArtments = await Apartmen.findAll();
  res.json(masapArtments);
});

router.delete('/delApart/:id', async (req, res) => {
 // console.log('=========>', req.params);
  const delIdApart = await Apartmen.destroy({ where: { id: req.params.id } });

 // console.log('-----------', delIdApart);

  res.sendStatus(200);
});

export default router;
