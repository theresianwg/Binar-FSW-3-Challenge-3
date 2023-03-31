class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card-pencarian-body">
          <div class="pencarian-body-image">
            <img src="${this.image}" alt="${this.manufacture}" class="car-thumbnail">
          </div>
          <div class="pencarian-body-text">
            <p class="tipe-mobil">${this.manufacture} ${this.model} / ${this.type}</p>
            <p class="harga-mobil">Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</p>
            <p class="deskripsi-mobil">${this.description}</p>
            <div class="col-lg-6 col-sm-12 deskripsi-text">
              <div class="marklist-container col-sm-12">
                <div class="marklist">
                  <img src="images/fi_users.png" style="width: 20px;" alt="">
                  <p class="description-text jumlah-kursi">${this.capacity} orang</p>
                </div>
                <div class="marklist">
                  <img src="images/fi_settings.png" style="width: 20px;" alt="">
                  <p class="description-text tipe-driver">${this.transmission}</p>          
                </div> 
                <div class="marklist">
                  <img src="images/fi_calender.png" style="width: 20px;" alt="">
                  <p class="description-text tahun">Tahun ${this.year}</p>
                </div> 
              </div>
            </div>
            <a class="nav-link btn btn-color-theme pl-3 pr-3" href="#" style="color: #FFFFFF !important; margin-top: 24px; width: 100%;">Pilih Mobil</a>
          </div>
        </div>
      </div>
      `;
    }
  }
