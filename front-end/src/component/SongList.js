import React, { useEffect } from "react";
import { useState } from "react";
import { getListSong , updateStatus, searchSong, deleteSong} from "../service/SongService";
import { Link } from "react-router-dom";


export default function SongList() {
    const [songList, setSongList] = useState([]);
    const [id, setId] = useState(null);
    const[song, setSong] =useState("")
    

    const getSongs = async () => {
        const data = await getListSong();
        setSongList(data);
    }

    // const getSong = async () =>{
    //     const data = await getSongById(id);
    //     setSong(data);
    // }
    useEffect(() => {
        getSongs();
        // if(id){
        //     getSong();
        // }
    }, [])
const handleUpdateStatus = async() =>{
    await updateStatus(id);
    setSong("");
}

const handleDeleteSong = async() =>{
    await deleteSong(id);
    setSongList(songList.filter(s => s.id !== id));
    setSong(null);
}
    const search = async()=>{
        const search1 = document.getElementById('search').value;
        const data1 = await searchSong(search1);;
        setSongList(data1);
    }
    return (
        <div style={{ background: '#41403f', height: '100%' }}>
            <div className="container-fluid">
                <div className="table">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row" style={{ background: '#41403f', color: 'white' }}>
                                <div className="col-sm-3">
                                    <h2>LIST TEST</h2>
                                </div>
                                <div className="col-sm-6">
                                    <Link to={`/create`}><button href="#addCustomerModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal">
                                        <span>Đăng kí bài hát</span>
                                    </button></Link>
                                </div>
                                <div className="col-sm-3">
                                    <div className="search-box">
                                        <div className="input-group">
                                            <input type="text" id="search" className="form-control" placeholder="Search by Name" />
                                            <span className="input-group-addon">
                                                <button  onClick={search}><i className="material-icons"></i></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Tên bài hát</th>
                                    <th>Ca sĩ</th>
                                    <th>Nhạc sĩ</th>
                                    <th>Thời gian phát</th>
                                    <th>Số lượng yêu thích</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
           
                                {songList.map((song,index) => 
                                    <tr key={song.id} >
                                        <td>{index + 1}</td>
                                        <td>{song.name}</td>
                                        <td>{song.singer}</td>
                                        <td>{song.musician}</td>
                                        <td>{song.playTime}</td>
                                        <td>{song.favourite}</td>
                                        <td>{song.status ? 'Công khai' : 'Lưu trữ'}</td>
                                        <td style={{ textAlign: 'center' }}>
                                        <button type="submit" onClick={() => setId(song.id)} data-toggle="modal" data-target="#Modal">Công khai</button>
                                        <button type="submit" onClick={() => setId(song.id)} data-toggle="modal" data-target="#deleteModal">Xóa</button>
                                        </td>
                                    </tr>
)}
                            </tbody>
                        </table>
                        <div>
                            <button >Trang trước</button>
                            <button >Trang sau</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Modal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleUpdateStatus}>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title"></h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Bạn muốn công khai bài hát này?</p>
                                <p className="text-warning">
                                    <small>Thao tác này không thể hoàn tác!!!</small>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal">
                                    Thoát
                                </button>
                                <button style={{ background: '#cda45e' }} type="submit" className="btn btn-danger">
                                    Công khai
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* modal xóa */}
            <div id="deleteModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleDeleteSong}>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title"></h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Bạn muốn xóa bài hát này?</p>
                                <p className="text-warning">
                                    <small>Thao tác này không thể hoàn tác!!!</small>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal">
                                    Thoát
                                </button>
                                <button style={{ background: '#cda45e' }} type="submit" className="btn btn-danger">
                                    Xóa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}