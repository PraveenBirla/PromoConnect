import React from 'react';

const StitchDesign = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#0d141c]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">CreatorConnect</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">
                Home
              </a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">
                Explore
              </a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">
                About
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-full placeholder:text-[#49739c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Find Your Perfect Creator</p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for creators"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-full placeholder:text-[#49739c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf4] pl-4 pr-2">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Technology</p>
                <div className="text-[#0d141c]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf4] pl-4 pr-2">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Lifestyle</p>
                <div className="text-[#0d141c]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf4] pl-4 pr-2">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Art</p>
                <div className="text-[#0d141c]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf4] pl-4 pr-2">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Music</p>
                <div className="text-[#0d141c]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf4] pl-4 pr-2">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Travel</p>
                <div className="text-[#0d141c]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Creators</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9V31j_H1Kk7kqBiuHAPBUwTbYVoOqEjg0sNpU87Xuj1jDjRAxhpEa9114bEwUzayH5zO25P34kqPucIOrHDoeV5hi4F2ubgq6S4kNqz_ujyVLNYHc3wqpHZwQ9MVa0LwodSJECx9mrk2nH8VxEXQ8uhYeda5bata0Wu8ve8saeZf94-BjtF4vzo2HAqRmWrVZoT02bk8SiUsDXy8X0Mx5KGIX_gHS5nV1aQL7B6yPrge8swiiY9K_8iUxkDOLl-Jr01UZQudK1L7A")' }}
                ></div>
                <div>
                  <p className="text-[#0d141c] text-base font-medium leading-normal">Ethan Carter</p>
                  <p className="text-[#49739c] text-sm font-normal leading-normal">Tech enthusiast and gadget reviewer</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMgReFa4D_1CZgXFCLLBVPDwgS_5IBAI4d4ZAMX2fSmAdccg6vR3TD5HymwBo_jbucXXgteU4S-SiPdynLdHw_Vikiq5cJF3vwoddyxNr0B6hfrNkvvti6Q2hIU06qcBBtPnYsOmmDR2sbnw1tA3VbkriObZmWqMJoCnmKvWBLAt0-2mcZJ7He7kBJvsv_uRAwdCxPNOboEWGVSO4mDnels1THPoVygc2HZPDMDfa08-l8zmdVYXanUgm9DDYcT2owdqKlxmMN1Ht1")' }}
                ></div>
                <div>
                  <p className="text-[#0d141c] text-base font-medium leading-normal">Sophia Bennett</p>
                  <p className="text-[#49739c] text-sm font-normal leading-normal">Lifestyle blogger and wellness coach</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCS4tPMKFSn5ABsltuZM6FgOY7ON2J2YOfupDGwXeFL5RYpVFatwdZQ0FUb3foxDmyl3qdAlTqVPIav9fXcyo2KuTqlEndrvxggqQ_YYTUnYmfxbFlKHT_eVAtVHIAAoJN8sSXVOZf1OCSgo9mTViD6ma47OUdlEm3D2l614gciunmQo-wSp5IqsN_pLZ1jCmHNrQUDzoFn5BZ4I5FKY5QeCZOD0vDYs0GljlNa78NP6Qnkq86Os4uDpu90u4nBiapJG0Pbp7wBhyBb")' }}
                ></div>
                <div>
                  <p className="text-[#0d141c] text-base font-medium leading-normal">Liam Harper</p>
                  <p className="text-[#49739c] text-sm font-normal leading-normal">Digital artist and illustrator</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAh4pMLGmRu5mqjlRkZ0tGycPHEoM9hMO9qkkzV_9XwHOhim5zqoE-XD91FLeCJy29rMVLPR1iMjgvzgLqEsh1wxl0VXv9Y_IxC617aXLpI66pCA6I8u1oKGxL1BIsHbULC6pgZeHgaYQD202iTbykCvoZlBkUOd9yEZx1mwhniBUJYzhhdsdl2ZilTpXBF2oVbe-a9KW3fqZOccJim-JP-9dFKKYKxpYwj0d_0-zErAA8dWdsHYb4DSNnfGwKWONVtcxhyUJD3gEiM")' }}
                ></div>
                <div>
                  <p className="text-[#0d141c] text-base font-medium leading-normal">Olivia Hayes</p>
                  <p className="text-[#49739c] text-sm font-normal leading-normal">Musician and composer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">
                  About
                </a>
                <a className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">
                  Contact
                </a>
                <a className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">
                  Privacy Policy
                </a>
              </div>
              <p className="text-[#49739c] text-base font-normal leading-normal">@2024 CreatorConnect. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StitchDesign;