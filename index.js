const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pets = [
  {
    "id": 1,
    "name": "Bella",
    "type": "Dog",
    "age": 2,
    "breed": "Golden Retriever",
    "fun_fact": "Golden Retrievers love swimming!",
    "image": "bella.jpg"
  },
  {
    "id": 2,
    "name": "Whiskers",
    "type": "Cat",
    "age": 3,
    "breed": "Siamese",
    "fun_fact": "Siamese cats are very vocal!",
    "image": "whiskers.jpg"
  }


]

app.get('/pets', (req, res) => {
  let petData = pets.map(pets => ({
    "id": pets.id,
    "name": pets.name,
    "type": pets.type,
    "image": pets.image
  }))

  res.json({ petData });
})

app.get('/pets/:id', (req, res) => {
  let filterPet = pets.filter(pets => pets.id == req.params.id)
  res.json(filterPet)
})

app.post('/adopt', (req, res) => {
  let petId = req.body.pet_id;
  let appName = req.body.applicant_name;
  let email = req.body.email;
  let reason = req.body.reason;

  adoption = {
    pet_id: petId,
    applicant_name: appName,
    email: email,
    reason: reason,
  }
  res.json({
    "adoption_id": 7001,
    "status": "pending_review",
    "message": "Your adoption request has been received!"
  }
  )
})

app.listen(3000, () => {
  console.log("Listening in port 3000");
})