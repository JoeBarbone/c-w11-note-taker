const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// const saveNote = require("../../public/js/index.js");

// const notes  = require("../../db/db.json");
//const { getNotes, saveNote, deleteNote} = require("../../public/js/index.js")





router.get("/notes", (req, res) => {
    // "../../db/db.json" but why?
    fs.readFile("./db/db.json", (err, data) => {
        if(err) throw err;

        // console.log(data);
        const notesParsed = JSON.parse(data);
        // console.log(notesParsed)
        res.json(notesParsed);
    })

});


router.post("/notes", (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4() };
    
    console.log(newNote)
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.log(`something went wrong reading file data: ${err}`);
        } else {

            const notesArray = JSON.parse(data);
            
            notesArray.push(newNote);

            fs.writeFile("./db/db.json", JSON.stringify(notesArray), (err) => 
            (err ? console.log(`Something went wrong trying to write file: ${err}`) : console.log("New note saved successfully")));
            
            res.json("New Note created!");
        }
    });


});



router.delete("/notes/:id", (req, res) => {

    const deleteID = req.params.id;
    console.log(`ID: ${deleteID}`);

    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.log(`something went wrong reading the file in the delete section: ${err}`);
        } else {

            const currentNotesArray = JSON.parse(data);
            
            const newNotesArray = [];

            for (let i=0; i < currentNotesArray.length; i++) {
                
                if(deleteID !== currentNotesArray[i].id) {
                    newNotesArray.push(currentNotesArray[i]);
                }
            
            }
            
            
            fs.writeFile("./db/db.json", JSON.stringify(newNotesArray), (err) => 
            (err ? console.log(`Something went wrong trying to write file after delete: ${err}`) : console.log("Note deleted successfully")));
            //return newNotesArray;
            res.json("Note Deleted!");
        }
    });

});


module.exports = router;