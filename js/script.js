$.getJSON("./pizza.json", 
    function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="shadow p-3 mb-5 bg-white rounded"><div class="card-mb-2"><img src="img/menu/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>');
        });
    }
);