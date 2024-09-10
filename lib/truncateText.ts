const truncateText = (content: string, maxLength: number) =>
    content.length > maxLength ? content.substring(0, maxLength).concat('...') : content;

export default truncateText;