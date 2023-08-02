package com.example.back_end.repository;

import com.example.back_end.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ISongRepository extends JpaRepository<Song, Integer> {
    @Query(value = "select * from song", nativeQuery = true)
    List<Song> findAll();

    @Transactional
    @Modifying
    @Query(value = "insert into song(name,singer,musician,playTime,favourite) value(:#{#song.name},:#{#song.singer},:#{#song.musician},:#{#song.playTime},:#{#song.favourite})", nativeQuery = true)
    void createSong(@Param("song") Song song);
    @Transactional
    @Modifying
    @Query(value = "update song set status = true where id = :id", nativeQuery = true)
    void  updateStatus(@Param("id") Integer id );

//    @Query(nativeQuery = true, value = "select * from song where id = :id")
//    Song getSongById(@Param("idSearch") Integer id);
}
