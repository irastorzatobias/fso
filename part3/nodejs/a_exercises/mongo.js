const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://tovillero:${password}@fso.gobtmma.mongodb.net/?retryWrites=true&w=majority`;

const noteSchema = new mongoose.Schema(
  {
    content: String,
    date: Date,
    important: Boolean,
  },
  {
    statics: {
      findByImportant() {
        return this.find({ important: true });
      },
    },
  }
);

const Note = mongoose.model("Note", noteSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");

    const note = new Note({
    content: 'New note',
    date: new Date(),
    important: true,
    })

    return note.save()

    Note.findByImportant()
      .exec((err, notes) => {
        console.log(notes);
        mongoose.connection.close();
      })
  })
  .then(() => {
    console.log('note saved!')
    mongoose.connection.close()
  })
  .catch((err) => console.log(err));
