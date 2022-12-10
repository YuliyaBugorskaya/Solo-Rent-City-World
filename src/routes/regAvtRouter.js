import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.post('/reg', async (req, res) => {
  console.log('=======>', req.body);
  const { name, email, pass } = req.body;
  const password = await bcrypt.hash(pass, 7);
  if (!name || !email || !password) return res.sendStatus(400);
  const [user, isCreated] = await User.findOrCreate({
    where: { email },
    defaults: { email, name, password },
  });
  if (!isCreated) return res.sendStatus(400);
  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  res.sendStatus(200);
});

router.post('/avt', async (req, res) => {
  const { email, pass } = req.body;
  try {
    const currUser = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(pass, currUser.password);
    if (compare) {
      req.session.user = {
        id: currUser.id,
        name: currUser.name,
        email: currUser.email,
      };
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
    console.log(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

export default router;
