import React from "react";
import { Search } from 'lucide-react';
import { useFormStore } from "../utils/useform";
import { useWalletStore } from "../utils/usewallet";
import { Link } from 'react-router-dom';

export default function HomeTest() {

    const campaigns = [
        {
                title: "Help My Father Recover From a Severe Heart Attack...",
                imageUrl: "https://img.freepik.com/free-photo/portrait-little-boy-refugee-holding-paper_23-2151494457.jpg?w=1380&t=st=1724928328~exp=1724931928~hmac=545485e7462bb67eaf6a2682ea15851e429df6ef57a1b3efaa6b9f65e69a7506",
                fundsRequired: "₹ 15,00,000",
                progress: 45,
                campaignEnds: "30 Days",
                peopleDonated: 10,
            },
            {
                title: "Urgent: Help Save a Child's Life...",
                imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg?t=st=1724926291~exp=1724929891~hmac=33641065ebe4b1101acd2f81b0531a217c6f2dadc58da37f139ec783f3872db4&w=1380",
                fundsRequired: "₹ 25,00,000",
                progress: 50,
                campaignEnds: "20 Days",
                peopleDonated: 15,
            },
            {
                title: "Help Me Provide Education to Underprivileged Kids...",
                imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg?t=st=1724926291~exp=1724929891~hmac=33641065ebe4b1101acd2f81b0531a217c6f2dadc58da37f139ec783f3872db4&w=1380",
                fundsRequired: "₹ 5,00,000",
                progress: 75,
                campaignEnds: "15 Days",
                peopleDonated: 50,
            },
      ];

  const formData = useFormStore((state) => state.formData);
  const wallet = useWalletStore(state => state.wallet);

  return (
    <div className="flex min-h-screen">
      {/* Vertical Navbar */}
      <div className="w-1/5 p-6 border-r-2 border-[#2f2334] bg-[#f8f9fa]">
        <div className="flex flex-col items-center mb-6 gap-4">
          <img 
            src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc" 
            alt="logo" 
            className="rounded-md w-12 h-12" 
          />
          <span className="hero text-2xl font-bold text-slate-950 font-inter">Mankind</span>
        </div>
        {/* Add any additional navigation links or content here */}
        <nav className="space-y-6 mt-6">
      <Link to="/home" className="flex items-center text-slate-950 font-semibold text-xl p-4 gap-2">
        Home
      </Link>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Ongoing</span>
        <Link to="/ongoing/campaigns" className="ml-6 block text-slate-700 text-lg">Campaigns</Link>
        <Link to="/ongoing/donations" className="ml-6 block text-slate-700 text-lg">Donations</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Completed</span>
        <Link to="/completed/campaigns" className="ml-6 block text-slate-700 text-lg">Campaigns</Link>
        <Link to="/completed/donations" className="ml-6 block text-slate-700 text-lg">Donations</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Profile</span>
        <Link to="/profile/campaigns" className="ml-6 block text-slate-700 text-lg">Your Campaigns</Link>
        <Link to="/profile/donations" className="ml-6 block text-slate-700 text-lg">Your Donations</Link>
      </div>

      <Link to="/" className="flex items-center text-slate-950 font-semibold text-xl p-4 gap-2">
        Logout
      </Link>
    </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
       

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 gap-6 m-10">
          {campaigns.map((campaign, index) => (
            <div key={index} className="w-auto bg-card rounded-lg shadow-lg overflow-hidden">
              <img src={campaign.imageUrl} alt="Campaign" className="w-full h-48 object-cover object-center" />
              <div className="bg-accent p-4">
                <h2 className="text-2xl font-bold text-foreground">{campaign.title}</h2>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">Funds Required</p>
                <p className="text-2xl font-bold">{campaign.fundsRequired}</p>
                <div className="relative pt-1 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold inline-block text-muted-foreground">
                      Progress: {campaign.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground px-3">Campaign ends in</p>
              <p className="text-lg font-semibold px-3">{campaign.campaignEnds}</p>
              <div className="relative pt-1">
                <div className="flex items-center justify-between px-3">
                  <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    <span className="text-muted-foreground ">{campaign.peopleDonated} people donated</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button className="bg-blue-400 text-secondary-foreground hover:bg-blue-500 w-full p-2 rounded-lg">Contribute</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar and User Info */}
      <div className="w-1/3 p-6 border-l-2 border-[#2f2334]">
        <div className="flex items-center gap-4 p-4 border-2 border-[#2f2334] rounded-lg mb-6">
          <img src="https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg" alt="avatar"
            className="inline-block relative object-cover object-center rounded-full w-12 h-12" />
          <div>
            <h6 className="block font-sans text-md antialiased font-semibold leading-relaxed tracking-normal text-inherit text-slate-950">
              {formData.firstName} {formData.lastName} ({formData.userName})
            </h6>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-400">
              User ID : {wallet}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 p-0 gap-2">
          <input type="text" placeholder="Search by Address / Txn Hash / Block / Token /" className="w-full p-2 rounded-lg bg-transparent text-[#d6cdda] m-2 border-2 border-[#2f2334] !outline-none" />
          <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border-2 border-[#2f2334] px-2 font-semibold text-neutral-200">
            <Search size={32} strokeWidth={2.25} />
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
        <div className="flex space-x-4 gap-4 items-center ml-2">
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white">
            <span>Login</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white">
            <span>Connect</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
