package com.example.back_end.dto;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class SongDto {


    @NotBlank
    @Max(value = 80, message = "Không quá 80 kí tự ")
    private String name;
    @NotBlank
    @Max(value = 30, message = "Không quá 30 kí tự ")
    private String singer;
    @NotBlank
    @Max(value = 30, message = "Không quá 30 kí tự ")
    private String musician;

    @NotBlank
    @Pattern(regexp = "^[0-9]{2}(:)([0-5][0-9]||60)$", message = "Phải đúng định dạng hh:mm")
    private String playTime;

    public SongDto() {
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


}
