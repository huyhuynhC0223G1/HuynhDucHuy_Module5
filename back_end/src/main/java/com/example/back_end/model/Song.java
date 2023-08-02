package com.example.back_end.model;

import javax.persistence.*;

@Entity
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
    private String singer;
    private String musician;


    private String playTime;
    private long favourite = 0;
    private boolean status;

    public Song() {
    }

    public Song(Integer id, String name, String singer, String musician, String playTime, long favourite, boolean status) {
        this.id = id;
        this.name = name;
        this.singer = singer;
        this.musician = musician;
        this.playTime = playTime;
        this.favourite = favourite;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getMusician() {
        return musician;
    }

    public void setMusician(String musician) {
        this.musician = musician;
    }

    public String getPlayTime() {
        return playTime;
    }

    public void setPlayTime(String playTime) {
        this.playTime = playTime;
    }

    public long getFavourite() {
        return favourite;
    }

    public void setFavourite(long favourite) {
        this.favourite = favourite;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
