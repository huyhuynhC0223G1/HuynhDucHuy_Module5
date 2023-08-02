package com.example.back_end.service;

import com.example.back_end.model.Song;
import com.example.back_end.repository.ISongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService implements ISongService {

    @Autowired
    private ISongRepository songRepository;

    @Override
    public List<Song> findAll() {
        return songRepository.findAll();
    }

    @Override
    public void create(Song song) {
        songRepository.createSong(song);
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public void updateStatus(Integer id) {
        songRepository.updateStatus(id);
    }

//    @Override
//    public Song getSongById(Integer id) {
//        return songRepository.getSongById(id);
//    }
}
