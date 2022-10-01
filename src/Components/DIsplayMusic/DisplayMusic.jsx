
const DisplayMusic = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Genre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div>{props.entry.title}</div></td>
                    <td><div>{props.entry.artist}</div></td>
                    <td><div>{props.entry.album}</div></td>
                    <td><div>{props.entry.release_date}</div></td>
                    <td><div>{props.entry.genre}</div></td>
                </tr>
            </tbody>
        </table>
    );
};

const SongMapper = (props) => {
    return(
        <ul>
            {props.parentEntries.map((entry, index) => (
                <li key={index}>
                    <DisplayMusic index={index} entry={entry} />
                </li>
            ))};
        </ul>
    );
};

export default SongMapper;