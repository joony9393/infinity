import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('관리자페이지');
  }

  async getHtml() {
    return `
    <div class="columns">
      <aside class="column is-2 aside hero is-fullheight">
        <div>
          <div class="compose has-text-centered">
            <a class="button is-danger is-block is-bold">
              <span class="compose">Infinity</span>
            </a>
          </div>
          <div class="main">
            <a href="#" class="item active">
              <span class="icon">
                <i class="fa fa-home fa-fw"></i>
              </span>
              <span class="name">General</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="name">Sales History</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-envelope-o"></i>
              </span>
              <span class="name">Category</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-folder-o"></i>
              </span>
              <span class="name">Product</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-inbox"></i>
              </span>
              <span class="name">Order</span>
            </a>
          </div>
        </div>
      </aside>
      <div class="column messages hero is-fullheight">
        <div>
          <table class="adminTable2">
            <thead class="adminThead2">
              <tr class="adminTheadTr2">
                <th><input type="checkbox" id="checkbox1" /></th>
                <th>이름</th>
                <th>구매 가격</th>
                <th>회원 아이디</th>
                <th>배송 상태</th>
                <th>구매 날짜</th>
                <th>결제 수단</th>
                <th>주문번호</th>
              </tr>
            </thead>
            <tbody class="adminTbody2">
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr2">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>
                  <img
                    src="../images/트위스티드 믹스 패턴 니트.png"
                  />트위스티드 믹스 패널 니트
                </td>
                <td>39,000원</td>
                <td>elon_musk03</td>
                <td>
                  <select>
                    <option>배송 준비중</option>
                    <option>배송중</option>
                    <option>배송 완료</option>
                    <option>주문 취소</option>
                    <option>주문 교환</option>
                    <option>주문 환불</option>
                  </select>
                </td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
            </tbody>
          </table>
          <div class="change">
            <a href="#" class="applyChange">변경사항 적용</a>
            <a href="#" class="cancel">취소</a>
          </div>
          <div class="paging">
            <a class="backPage" href="#">＜</a>
            <a href="#" class="currentPage">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a class="nextPage" href="#">＞</a>
          </div>
        </div>
      </div>
    </div>
        `;
  }
}