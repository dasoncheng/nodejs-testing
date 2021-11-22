import axios from "axios";

export function GetList() {
  return new Promise<any>((resolve, reject) => {
    axios
      .get(
        "https://qtest.xinluomed.com/flupPatient/listPatients?size=20&current=1&search=",
        {
          headers: {
            token:
              "cle4ip1AWZAcj5aV8/kKqmE2P9PuIit6I/6MxNWBSws7biOa5AFNTR17xeeNljjJnUxhUjO42AoRE1ipmT1VoOl+75lk+yhcUVFWrJiIbcmIlVuV9NSDgMKAO1L+LeiV6zBrAY5PhqtdF72QtZ1QIwvdiRd5yEgwBnuWPv7+4hc=",
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export async function GetIP() {
  const res = await axios.get("http://www.ip.cn/api/index?type=0&ip=");

  return res;
}
