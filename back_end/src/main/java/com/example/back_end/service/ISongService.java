package com.example.back_end.service;

import com.example.back_end.model.Song;

import java.util.List;

public interface ISongService {
    List<Song> findAll();

    void create(Song song);

    void delete(Integer id);

    void updateStatus(Integer id);

    void deleteSong(Integer id);

    List<Song> searchSongByName(String name);

//    Song getSongById(Integer id);
}
