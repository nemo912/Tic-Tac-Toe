export default function AvatarList({ selected, isBackwards, style }) {
    const offset = 3;

    let position = selected - offset;
    if (position < 0) position += 11; /* length of array */

    const list = Array.from(Array(7), (_, i) => {
        const item = <div
            className={i === offset ? (isBackwards ? style.selectedAvatarContainerB : style.selectedAvatarContainerF) : style.avatarContainer} key={position} >
            <img
                src={`/avatars/${position}.webp`}
                className={`${i === offset ? style.selectedAvatar : style.avatar} ${i < offset ? style.prevAvatar : style.nextAvatar}`}
                draggable="false"
            />
        </div>;

        position = (position + 1) % 11;

        return item;
    });

    return list;
}
