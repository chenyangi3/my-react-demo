export function getDirectPath({type, avtor}) {
    //根据用户信息，返回要跳转的路径
    //user.type  /boss  /genius
    //user.avtor  /bossinfo  /geniusinfo
    let url = (type === 'boss') ? '/boss' : '/genius'
    if (!avtor) {
        url += 'info'
    }
    return url;
}