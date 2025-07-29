import React from 'react';

 

const featuredCreators = [
    {
        name: 'Lucas Bennett',
        niche: 'Tech Reviews',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTO43UgqzdDTtPDnZRIKNEg-EoS_KqdsxVLILX-mVmk6lBD44PLalxtwYzjspyiN7W0nvsZKnQa8XuKOKe7ULJ-PvWufsfN-RoZZnkxEF0cEGstktSB1JYUN_HJgFiU6IeoT2npAsASqLmSlj1OVsLMowy4nfUjr373EDvbimcbC9zRZW07eJYLTCTs5_XbIxA7dghsNxCopqA-L14xoIZogCri_W-Ai_0-TxA46iUd8v2fDugrdLzGIMmCGoKRUmIpdPmb-ia9TMP',
    },
    {
        name: 'Isabella Carter',
        niche: 'Fashion & Style',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcCXIh5jXl3hbK8yRrIVsGdqki2MaPgreEahVIciSfl2EVCpEqaX-hZR2sYCvvHQPgWYJJ-KJRy-_LqBN9MS9jtFnAWpeqnak5h8mEtrXW8n9_bupFsVT81xCm-FbvilYMsbYd6RAWilCNn80Xvva_Cdq7gnbCTqb6giZbanWJA4xI3XECXOdpVWbEBn8b-IvGaBngU5ZGGk6R3Kw8ftyhfdHa_OKe9o1Oz-0b1Fq9EstTi-m4KHubuVi2pJ46zXEvxvVfhYKkQ-LO',
    },
    {
        name: 'Noah Hayes',
        niche: 'Travel Vlogs',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJTLt9BTpIWlQg6pZrE4vDJXAn9cRgNSZP3jcG0fL8lD3pc5aEdKxFTJPdieYD1fiO-LdWWwz4i658W14yoAJZn21Vy8VujL4K1wCYDoAnIG4wppg9htoSybpO1BKjDPzlVjnTpWWJokjvsueqSD6Hh0e_JRiCS6hZvsMUjm_gRmeBlqRiVEPlSJQyg35UcWVFj9PqCsfCACSU5z4gOMSWsrd5O2krFZ4fl624gE2u8pE31MQByuxtl8iSUk8OxizSLbHabHFUl0D9',
    },
    {
        name: 'Ava Reed',
        niche: 'Food Photography',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFCtrPvrhZimKTHuJvgApv454Wgtc9HEm0Ss1Bhxi6LU-Uv-RUrWJRl6P2HuPoyEX0LIRJMBU74C-VPEzKP7ykvqWWweCIyAkKLBupp3o0vil35NddTtef1DXC8qdPXSRINXnINDmYQorRYdbkFKBfdtXAJXwRcEDVVyNt1ikhB95n89lEwlr1BRSqfzsWpyccHD4izCB6oiJNVQUxfZVmXNkOsXvJFkctAcJ-D9detHNa199onHc9ODmBeRf0sDnY_ujENC-i8-aU',
    },
];

// --- SVG Icon Components for better reusability ---

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
);

const CaretDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
);

const navItems = [
    { name: 'Home', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>, active: false },
    { name: 'Explore', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"></path></svg>, active: true },
    { name: 'Create', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path></svg>, active: false },
    { name: 'Profile', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>, active: false },
];

// --- Main App Component ---

const FindCreators = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-gray-50 justify-between group/design-root overflow-x-hidden">
            <div>
                {/* Header */}
                <header className="flex items-center bg-gray-50 p-4 pb-2 justify-between">
                    <div className="text-[#101518] flex size-12 shrink-0 items-center">
                       <ArrowLeftIcon />
                    </div>
                    <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Find Creators</h2>
                </header>

                {/* Search Bar */}
                <div className="px-4 py-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                <SearchIcon />
                            </div>
                            <input
                                placeholder="Search creators"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            />
                        </div>
                    </label>
                </div>

                {/* Filters */}
                <div className="flex gap-3 p-3 overflow-x-auto">
                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaedf1] pl-4 pr-2">
                        <p className="text-[#101518] text-sm font-medium leading-normal">Creator Type</p>
                        <div className="text-[#101518]">
                           <CaretDownIcon />
                        </div>
                    </button>
                    {/* Add more filter buttons here if needed */}
                </div>

                {/* Featured Creators Section */}
                <section>
                    <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured Creators</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        {featuredCreators.map((creator) => (
                            <div key={creator.name} className="flex flex-col gap-3 text-center pb-3">
                                <div className="px-4">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                        style={{ backgroundImage: `url("${creator.imageUrl}")` }}
                                    ></div>
                                </div>
                                <div>
                                    <p className="text-[#101518] text-base font-medium leading-normal">{creator.name}</p>
                                    <p className="text-[#5c748a] text-sm font-normal leading-normal">{creator.niche}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Bottom Navigation */}
            <footer className="sticky bottom-0">
                <nav className="flex gap-2 border-t border-[#eaedf1] bg-gray-50 px-4 pb-3 pt-2">
                    {navItems.map((item) => (
                        <a key={item.name} href="#" className={`flex flex-1 flex-col items-center justify-end gap-1 ${item.active ? 'text-[#101518]' : 'text-[#5c748a]'}`}>
                            <div className="flex h-8 items-center justify-center">
                                {item.icon}
                            </div>
                            <p className="text-xs font-medium leading-normal tracking-[0.015em]">{item.name}</p>
                        </a>
                    ))}
                </nav>
                <div className="h-5 bg-gray-50"></div>
            </footer>
        </div>
    );
};

export default FindCreators;