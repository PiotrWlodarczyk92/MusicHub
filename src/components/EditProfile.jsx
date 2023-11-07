

const EditProfile = () => {
  return (
    <>
    <form className="flex flex-col">
        <label>Name</label>
        <input type="text" placeholder="Name"></input>
        <label>Profile image</label>
        <input type="image" placeholder="Profile image"></input>
        <label>About user</label>
        <textarea type="text" placeholder="About user"></textarea>
        <label>Tags</label>
        <input type="text" placeholder="Tags"></input>
        <button type="submit">Save changes</button>
    </form>
    </>
  )
}

export default EditProfile