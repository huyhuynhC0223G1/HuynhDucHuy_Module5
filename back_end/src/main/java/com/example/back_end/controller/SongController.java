package com.example.back_end.controller;

import com.example.back_end.model.Song;
import com.example.back_end.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/song")
@CrossOrigin("*")
public class SongController {
    @Autowired
    private ISongService songService;

    @GetMapping("")
    public ResponseEntity<?> getSong() {
        if (songService.findAll() == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(this.songService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> createSong(@RequestBody Song song) {
        this.songService.create(song);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> updateStatusSong(@PathVariable Integer id) {
        this.songService.updateStatus(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable Integer id){
        this.songService.deleteSong(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<?> searchMusic(@PathVariable(value = "name",required = false) String name){
        return new ResponseEntity<>(this.songService.searchSongByName(name),HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    @ResponseBody
//    public ResponseEntity<?> getSongById(@PathVariable Integer id) {
//
//        return new ResponseEntity<>(songService.getSongById(id), HttpStatus.OK);
//    }
}
