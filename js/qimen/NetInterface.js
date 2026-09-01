
export const NetState = cc.Enum({
  SOCKET_CONNECT: 0,
  SOCKET_RECONNECT: 1,
  SOCKET_START_RECONNECT: 2,
  SOCKET_CLOSE: 3,
  SOCKET_DATA: 4,
  SOCKET_NOCONNECT: 5,
  SOCKET_DEBUG_INFO: 6,
  HTTP_LOADEND: 7,
  HTTP_ERROR: 8,
  HTTP_TIMEOUT: 9
});

export const NetFlg = cc.Enum({
  succ: 0,
  fail1: 1,
  fail2: 2,
  fail3: 3,
  fail4: 4
});
