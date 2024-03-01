import { navigateTo } from '../../router/index.js';
import { BASE_URI } from '../js/constant/url.js';
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('관리자페이지');
  }

  loadProduct = async (param) => {
    const res = await fetch(`${BASE_URI}/api/product?prodNum=${param}`, {
      method: 'GET'
    });
    const {
      prodName,
      prodCost,
      prodContent,
      prodImgs,
      prodRemains,
      prodSize,
      prodColor,
      prodCount,
      productCategory,
      prodStock,
      prodmidifiedData,
      prodRegDate,
      prodSubCategory
    } = await res.json();
    return {
      prodName,
      prodCost,
      prodContent,
      prodImgs,
      prodRemains,
      prodSize,
      prodColor,
      prodCount,
      productCategory,
      prodStock,
      prodmidifiedData,
      prodRegDate,
      prodSubCategory
    };
  };

  async getHtml() {
    const urlParams = new URLSearchParams();
    const queryParam = urlParams.get('prodId');
    if (!queryParam) {
      navigateTo(`${BASE_URI}/admin`);
    }
    const {
      prodName,
      prodCost,
      prodContent,
      prodImgs,
      prodRemains,
      prodSize,
      prodColor,
      prodCount,
      productCategory,
      prodStock,
      prodmidifiedData,
      prodRegDate,
      prodSubCategory
    } = await this.loadProduct('65e07f03a552da5d179fa0ad');
    const imgDiv = prodImgs
      .map((src) => {
        return `<img src="${src}" alt="${src}" />`;
      })
      .join('');
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
              <a href="#" class="item active" data-link>
                <span class="icon">
                  <i class="fa fa-home fa-fw"></i>
                </span>
                <span class="name">General</span>
              </a>
              <a href="#" class="item" data-link>
                <span class="icon">
                  <i class="fa fa-star"></i>
                </span>
                <span class="name">Sales History</span>
              </a>
              <a href="#" class="item" data-link>
                <span class="icon">
                  <i class="fa fa-envelope-o"></i>
                </span>
                <span class="name">Category</span>
              </a>
              <a href="#" class="item" data-link>
                <span class="icon">
                  <i class="fa fa-folder-o"></i>
                </span>
                <span class="name">Product</span>
              </a>
              <a href="#" class="item" data-link>
                <span class="icon">
                  <i class="fa fa-inbox"></i>
                </span>
                <span class="name">Order</span>
              </a>
            </div>
          </div>
        </aside>
        <div class="productSetting">
          <div class="addImage">
          <form id="imageForm">
            <button type="button" class="submit">제출하기</button> </br>
              <label class="productButton" for="product"
                >이미지 업로드<br />
                </label>
                <input type="file" id="product" multiple  accept="image/*"/>
            <form>
            <div id="previewContainer">
              ${imgDiv}
            </div>
          </div>
          

          <div class="productInformation">
            <label for="productName">상품가격</label><br />
            <input
              type="text"
              id="productName"
              name="productName"
              size="70"
              value=${prodName}
            /><br />
            <label for="productPrice">상품가격</label><br />
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              size="70"
              value=${prodCost}
            /><br />
            <label for="prodContent">상품 설명</label><br />
            <input
              type="text"
              id="prodContent"
              name="prodContent"
              size="70"
              value="${prodContent}"
            /><br />
            <label for="productCategory">상품분류</label><br />
            <input
              type="text"
              id="productCategory"
              name="productCategory"
              size="70"
              value=${prodSubCategory.prodSubCategory}
            /><br />
            
            <label for="stock">재고</label><br />
            <input type="text" id="stock" name="stock" size="70" value=${prodRemains} /><br />
            
            <label for="modificationDate">최종 수정일</label><br />
            <input
              type="text"
              id="prodModificationDate"
              name="prodModificationDate"
              size="70"
              value="${new Intl.DateTimeFormat('ko-kr').format(new Date(prodRegDate))}"
            /><br />

            <label for="productSize">상품Size</label><br />
            <input type="text" id="productSize" name="productSize" size="70" value=${prodSize} /><br />
            
            <label for="productColor">상품Color</label><br />
            <input type="text" id="productColor" name="productSize" size="70" value=${prodColor} /><br />
            
            <label for="productCount">상품 판매 수</label><br />
            <input
              type="text"
              id="productCount"
              name="productCount"
              size="70"
              disabled
              value=${prodCount || 0}
            /><br />

            <div class="productInforButton">
              <button class="prodAdd">상품 추가</a>
              <button class="prodUpdate">상품정보 수정</button>
              <button class="prodDelete">상품 삭제</button>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}
