const express = require('express');
const router = express.Router();

// Route vers la page d'accueil
router.get('/', (req, res) => {
  res.send("Page d'accueil du Posts");
});

// Route vers la page à propos
router.get('/about', (req, res) => {
  res.send('À propos de Posts');
});

router.get('/posts', (req, res) => {
  res.send('Liste des posts !')
});

router.get('/postNew', (req, res) => {
  res.send('Post new !')
});

router.get('/postDelete', (req, res) => {
  res.send('Post delete !')
});

router.get('/postJSON', (req, res) => {
  const posts = [
    {
      postID: 1,
      postTitle: 'post1 title',
      postDescription: 'post desxcription1',
      postDate: '03/04/2022'
    },
    {
      postID: 2,
      postTitle: 'post2 title',
      postDescription: 'post desxcription1',
      postDate: '14/12/2022'
    },
    {
      postID: 3,
      postTitle: 'post3 title',
      postDescription: 'post desxcription3',
      postDate: '05/09/2022'
    }
  ];
  res.status(200).json({
      message: 'Requete réussie !',
      data: posts
    });
});

const etudiants = [
  {
    prenom: 'Ferid'
  },
  {
    prenom: 'Khaled'
  },
  {
    prenom: 'Roua'
  }
];
router.get('/etudiants', (req, res) => {
  res.status(200).json({
      message: 'Requete réussie !!!',
      etudiants: etudiants
    });
});

router.post('/etudiants', (req, res) => {
  etudiants.push(req.body);
  console.log(req.body);
  res.status(201).json({
    message: 'Etudiant added successfully !'
  });
});

router.delete('/etudiants/:prenom', (req, res) => {
  etd = etudiants.find((e) => e.prenom == req.params.prenom);
  etudiants.pop(etd);
  console.log(etd);
  res.status(200).json({
    message: 'Etudiant deleted successfully !'
  });
});


module.exports = router;
