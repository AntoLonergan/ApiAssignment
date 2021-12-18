import express from 'express';
import Sub from './subModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

// Get all subs
router.get('/', async (req, res) => {
    const subs = await Sub.find();
    res.status(200).json(subs);
});

  // Register A sub
router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.name || !req.body.email) {
      res.status(401).json({success: false, msg: 'Please pass name and email.'});
      return next();
    }
    if (req.query.action === 'register') {
      await Sub.create(req.body);
      res.status(201).json({code: 201, msg: 'Successful created new sub.'});
    } 
  }));

export default router;