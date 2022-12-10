import express from 'express';
import { Apartmen } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { };

  res.render('Layout', initState);
});
router.get('/reg', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
router.get('/avt', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/addapartment', async (req, res) => {
  const masapArtments = await Apartmen.findAll();
  const initState = { masapArtments };
  res.render('Layout', initState);
});

router.get('/apartments', async (req, res) => {
  const masapArtments = await Apartmen.findAll();
  const initState = { masapArtments };
  res.render('Layout', initState);
});
export default router;
