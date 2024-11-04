function Course({ image, name, description }) {
  return (
    <div className="card">
      <div Name="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Kurslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Course;
