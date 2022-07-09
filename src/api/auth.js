import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data,
  });
}

export function register(data) {
  return request({
    url: '/registration',
    method: 'post',
    data: data,
  });
}

export function getInfo() {
  return request({
    url: '/users',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}
export function invite(data) {
  return request({
    url: '/users',
    method: 'post',
    data: data,
  });
}
export function list() {
  return request({
    url: '/users',
    method: 'get',
  });
}
export function resident() {
  return request({
    url: '/resident',
    method: 'get',
  });
}
export function getresident(data) {
  return request({
    url: '/resident',
    method: 'post',
    data: data,
  });
}
export function singleresident(data) {
  return request({
    url: '/resident/' + data.data,
    method: 'get',
  });
}

