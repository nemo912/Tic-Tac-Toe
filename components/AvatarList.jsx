export default function AvatarList({ selected, backwards, style }) {

    let num = selected - 2;
    if (num < 0) num += 11;

    const list = Array.from(Array(5), (_, i) => {
        const item = <div
            className={i === 2 ? (backwards ? style.selectedAvatarContainerB : style.selectedAvatarContainerF) : style.avatarContainer} key={num} >
            <img
            src={`/avatars/${num}.webp`}
            className={`${i === 2 ? style.selectedAvatar : style.avatar} ${i < 2 ? style.prevAvatar : style.nextAvatar}`}
            draggable="false"
            loading="lazy"
        />
        </div>;

        num = (num + 1) % 11;

        return item;
    });

    return list;
}
