let songs = JSON.parse(localStorage.getItem('songs')) || [];
let editId = null; 

function renderSongs(data = songs) {
    const tableBody = document.getElementById('songTable');
    tableBody.innerHTML = '';

    data.forEach((song) => {
        tableBody.innerHTML += `
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button class="edit" onclick="editSong(${song.id})">Sửa</button>
                    <button class="delete" onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

function handleSubmit() {
    const title = document.getElementById('title').value.trim();
    const artist = document.getElementById('artist').value.trim();

    if (!title || !artist) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (editId === null) {
        const newSong = {
            id: songs.length > 0 ? songs[songs.length - 1].id + 1 : 1,
            title: title,
            artist: artist
        };
        songs.push(newSong);
    } else {
        const index = songs.findIndex(s => s.id === editId);
        songs[index].title = title;
        songs[index].artist = artist;
        
        editId = null;
        document.getElementById('formTitle').innerText = "🎵 Thêm bài hát";
        document.getElementById('submitBtn').innerText = "Thêm";
    }

    saveAndRefresh();
    resetForm();
}

function editSong(id) {
    const song = songs.find(s => s.id === id);
    if (song) {
        document.getElementById('title').value = song.title;
        document.getElementById('artist').value = song.artist;
        document.getElementById('formTitle').innerText = "📝 Sửa bài hát";
        document.getElementById('submitBtn').innerText = "Cập nhật";
        editId = id; 
    }
}

function deleteSong(id) {
    if (confirm("Bạn có chắc muốn xóa bài hát này không?")) {
        songs = songs.filter(s => s.id !== id);
        saveAndRefresh();
    }
}

function searchSong() {
    const keyword = document.getElementById('search').value.toLowerCase();
    const filtered = songs.filter(song => 
        song.title.toLowerCase().includes(keyword)
    );
    renderSongs(filtered);
}

function saveAndRefresh() {
    localStorage.setItem('songs', JSON.stringify(songs));
    renderSongs();
}

function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('artist').value = '';
}

renderSongs();