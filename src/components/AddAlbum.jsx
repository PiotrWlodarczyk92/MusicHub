

const AddAlbum = () => {
  return (
    <>
    <form className="flex flex-col">
        <label>Album Title</label>
        <input type="text" placeholder="Title"></input>
        <label>Album cover</label>
        <input type="image" placeholder="Album cover"></input>
        <label>Tracks</label>
        <input type="file" placeholder="Add tracks"></input>
        <label>Price</label>
        <input type="number" placeholder="Price"></input>
        <label>About album</label>
        <textarea type="text" placeholder="Album description"></textarea>
        <label>Tags</label>
        <input type="text" placeholder="Tags"></input>
        <button type="submit">Add Album</button>
    </form>
    </>
  )
}

export default AddAlbum