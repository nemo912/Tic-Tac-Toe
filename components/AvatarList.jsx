export default function AvatarList({ selected, isBackwards, style }) {
    const offset = 2;

    let position = selected - offset;
    if (position < 0) position += 11; /* length of array */

    const list = Array.from(Array(5), (_, i) => {
        
        const item = <div
            className={i === offset ? (isBackwards ? style.selectedAvatarContainerB : style.selectedAvatarContainerF) : style.avatarContainer} key={position} >
            <div
            className={`${i === offset ? style.selectedAvatar : style.avatar} ${i < offset ? style.prevAvatar : style.nextAvatar} ${style[`avatar${position}`]}`}
            />
        </div>;

        position = (position + 1) % 11;

        return item;
    });

    return list;
}
