
function Form({title,body,isDone,CreateData,SetT,SetB,SetD}){
    return(
        <div>
            <form>
                <div>
                    <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => SetT(e.target.value)}
                    placeholder="title"
                    />
                </div>
                <div>
                    <textarea
                    required
                    value={body}
                    onChange={(e) => SetB(e.target.value)}
                    placeholder="body"
                    ></textarea>
                </div>
                <div>
                    <select
                    value={isDone}
                    onChange={(e) => SetD(e.target.value)}
                    >
                    <option value={false}>pending</option>
                    <option value={true}>done</option>
                    </select>
                    <button onClick={CreateData}>Add</button>
                </div>
        
            </form>
        </div>
    );
}

export default Form;