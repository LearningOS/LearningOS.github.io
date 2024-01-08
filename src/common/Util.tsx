export const getAspectRatioStyle = (ratio: number): React.CSSProperties => ({
    width: '100%',
    height: 0,
    paddingTop: `${ratio * 100}%`, /* 高度是宽度的 50% */
    position: 'relative', /* 子元素可以绝对定位相对此元素 */
});