import express from 'express';

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
export default router;
