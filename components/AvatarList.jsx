export default function AvatarList({ selected, isBackwards, style }) {
    const offset = 2;

    let startPosition = selected - offset;
    if (startPosition < 0) startPosition += 11; /* length of array */

    const list = Array.from(Array(5), (_, i) => {
        const item = <div
            className={i === offset ? (isBackwards ? style.selectedAvatarContainerB : style.selectedAvatarContainerF) : style.avatarContainer} key={num} >
            <img
            src={`/avatars/${startPosition}.webp`}
            className={`${i === offset ? style.selectedAvatar : style.avatar} ${i < offset ? style.prevAvatar : style.nextAvatar}`}
            draggable="false"
            loading="lazy"
        />
        </div>;

        startPosition = (startPosition + 1) % 11;

        return item;
    });

    return list;
}
