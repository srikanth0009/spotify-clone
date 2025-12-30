import React from 'react'
import {
  Home,
  Search,
  ShoppingCart,
  Download,
  Bell,
  Settings,
  ExternalLink,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";



const Premium = () => {

  return (

    <div className="bg-black min-h-full">
                {/* Hero Banner */}
                <div className="bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900 px-6 py-16 text-center">
                  <h1 className="text-3xl font-black mb-4 text-balance">
                    Listen without limits. Try 3 months of Premium Standard for ₹0.
                  </h1>
                  <p className="text-xl mb-6">Only ₹199/month after. Cancel anytime.</p>

                  <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur px-4 py-2 rounded-full mb-8">
                    <Bell className="w-4 h-4" />
                    <span className="font-semibold">Offer ends in 7 days</span>
                  </div>

                  <div className="flex gap-4 justify-center items-center">
                    <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 px-8 font-semibold text-base">
                      Try 3 months for ₹0
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full h-12 px-8 font-semibold text-base border-2 border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      View all plans
                    </Button>
                  </div>

                  <p className="text-xs mt-6 text-white/80 max-w-3xl mx-auto">
                    Premium Standard only. ₹0 for 3 months, then ₹199 per month after. Offer only available if you
                    haven't tried Premium before. <span className="underline cursor-pointer">Terms apply.</span>
                    <br />
                    Offer ends December 31, 2025.
                  </p>
                </div>

                {/* Choose Premium Plan Section */}
                <div className="px-6 py-16">
                  <h2 className="text-4xl font-black text-center mb-4">
                    Choose the Premium plan that's right for you. You've got options.
                  </h2>
                  <p className="text-center text-lg text-zinc-400 mb-8">
                    Choose a Premium plan and listen to the podcasts and ad-free music you want, when you want.
                  </p>
                  <p className="text-center text-zinc-400 mb-12">Pay in various ways. Cancel anytime.</p>

                  {/* Payment Methods */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">Bhim UPI</span>
                    </div>
                    <div className="bg-purple-600 rounded-lg w-14 h-14 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">G</span>
                    </div>
                    <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-xs">Paytm</span>
                    </div>
                  </div>
                  <div className="text-center mb-16">
                    <button className="text-zinc-400 underline hover:text-white">+ 6 more</button>
                  </div>

                  {/* Premium Plans Grid */}
                  <div className="flex flex-col items-center  gap-6 max-w-7xl mx-auto mb-16">
                    {/* Lite Plan */}
                    <div className="w-[500px] bg-zinc-900 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="font-semibold text-sm">Premium</span>
                      </div>
                      <h3 className="text-3xl font-black mb-4">Lite</h3>
                      <div className="mb-6">
                        <div className="text-2xl font-bold">₹139 / month</div>
                      </div>
                      <div className="border-t border-zinc-800 pt-6 mb-6">
                        <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>1 Lite account</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>High audio quality (up to ~160kbps)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Cancel anytime</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-12 font-semibold">
                        Get Premium Lite
                      </Button>
                    </div>

                    {/* Standard Plan */}
                    <div className=" w-[500px] bg-zinc-900 rounded-lg p-6 relative">
                      <div className="absolute -top-3 left-6 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                        ₹0 for 3 months
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="font-semibold text-sm">Premium</span>
                      </div>
                      <h3 className="text-3xl font-black mb-4">Standard</h3>
                      <div className="mb-6">
                        <div className="text-2xl font-bold">₹0 for 3 months</div>
                        <div className="text-sm text-zinc-400">₹199 / month after</div>
                      </div>
                      <div className="border-t border-zinc-800 pt-6 mb-6">
                        <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>1 Standard account</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Download to listen offline</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Very high audio quality (up to ~320kbps)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Cancel anytime</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Subscribe or one-time payment</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-12 font-semibold">
                        Try 3 months for ₹0
                      </Button>
                      <p className="text-xs text-zinc-400 mt-4 text-center">
                        ₹0 for 3 months, then ₹199 per month after. Offer only available if you haven't tried Premium
                        before. <span className="underline cursor-pointer">Terms apply.</span>
                        <br />
                        Offer ends December 31, 2025.
                      </p>
                    </div>

                    {/* Student Plan */}
                    <div className="w-[500px] bg-zinc-900 rounded-lg p-6 relative">
                      <div className="absolute -top-3 left-6 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Savings available
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="font-semibold text-sm">Premium</span>
                      </div>
                      <h3 className="text-3xl font-black mb-4">Student</h3>
                      <div className="mb-6">
                        <div className="text-2xl font-bold">₹99 for 2 months</div>
                        <div className="text-sm text-zinc-400">₹99 / month after</div>
                      </div>
                      <div className="border-t border-zinc-800 pt-6 mb-6">
                        <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>1 verified Standard account</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Download to listen offline</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Very high audio quality (up to ~320kbps)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Cancel anytime</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-12 font-semibold">
                        Try 2 months for ₹99
                      </Button>
                      <p className="text-xs text-zinc-400 mt-4 text-center">
                        ₹99 for 2 months, then ₹99 per month after. Offer reserved for students enrolled in an eligible
                        accredited institution of higher education. Not available to users who have already tried
                        Premium.{" "}
                        <span className="underline cursor-pointer">
                          Subject to the Spotify Student Discount Terms and Conditions.
                        </span>
                      </p>
                    </div>

                    {/* Platinum Plan */}
                    <div className="w-[500px] bg-zinc-900 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="font-semibold text-sm">Premium</span>
                      </div>
                      <h3 className="text-3xl font-black mb-4">Platinum</h3>
                      <div className="mb-6">
                        <div className="text-2xl font-bold">₹299 / month</div>
                      </div>
                      <div className="border-t border-zinc-800 pt-6 mb-6">
                        <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Up to 3 Platinum accounts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Download to listen offline</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Lossless audio quality (up to ~24-bit/44.1kHz)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Mix your playlists</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Your personal AI DJ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>AI playlist creation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Connect your DJ software</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-zinc-400">•</span>
                            <span>Cancel anytime</span>
                          </li>
                        </ul>
                      </div>
                      <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 h-12 font-semibold">
                        Get Premium Platinum
                      </Button>
                      <p className="text-xs text-zinc-400 mt-4 text-center">
                        For up to 3 individuals residing at the same address.{" "}
                        <span className="underline cursor-pointer">Terms apply.</span>
                      </p>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl font-black text-center mb-8">Experience the difference</h2>
                    <p className="text-center text-zinc-400 mb-8">
                      Go Premium Standard and listen the way you want. Cancel anytime.
                    </p>

                    <div className="bg-zinc-900 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 border-b border-zinc-800">
                        <div className="p-6">
                          <h3 className="font-bold text-lg">What you'll get</h3>
                        </div>
                        <div className="p-6 text-center border-l border-zinc-800">
                          <h3 className="font-bold">
                            Spotify's
                            <br />
                            Free plan
                          </h3>
                        </div>
                        <div className="p-6 text-center border-l border-zinc-800 bg-zinc-800/50">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                            <h3 className="font-bold">Premium Standard</h3>
                          </div>
                        </div>
                      </div>

                      {[
                        { feature: "Ad-free music listening", free: false, premium: true },
                        { feature: "Play songs in any order", free: false, premium: true },
                        { feature: "Very high audio quality", free: false, premium: true },
                        { feature: "Listen with friends in real time", free: false, premium: true },
                      ].map((row, index) => (
                        <div key={index} className="grid grid-cols-3 border-b border-zinc-800 last:border-b-0">
                          <div className="p-6">
                            <span className="font-medium">{row.feature}</span>
                          </div>
                          <div className="p-6 text-center border-l border-zinc-800">
                            {row.free ? (
                              <div className="w-6 h-6 rounded-full bg-white mx-auto flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-black"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <span className="text-zinc-600 text-2xl">—</span>
                            )}
                          </div>
                          <div className="p-6 text-center border-l border-zinc-800 bg-zinc-800/50">
                            {row.premium && (
                              <div className="w-6 h-6 rounded-full bg-white mx-auto flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-black"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <footer className="bg-black pt-16 pb-8">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="grid grid-cols-4 gap-8 mb-12">
                        <div>
                          <h4 className="font-bold mb-4">Company</h4>
                          <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                              <a href="#" className="hover:text-white">
                                About
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Jobs
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                For the Record
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">Communities</h4>
                          <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                              <a href="#" className="hover:text-white">
                                For Artists
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Developers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Advertising
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Investors
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Vendors
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">Useful links</h4>
                          <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                              <a href="#" className="hover:text-white">
                                Support
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Free Mobile App
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Popular by Country
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Import your music
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4">Spotify Plans</h4>
                          <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                              <a href="#" className="hover:text-white">
                                Premium Lite
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Premium Standard
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Premium Platinum
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Premium Student
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-white">
                                Spotify Free
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-4 mb-12">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-6 text-sm text-zinc-400 mb-8">
                        <a href="#" className="hover:text-white">
                          Legal
                        </a>
                        <a href="#" className="hover:text-white">
                          Safety & Privacy Center
                        </a>
                        <a href="#" className="hover:text-white">
                          Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white">
                          Cookies
                        </a>
                        <a href="#" className="hover:text-white">
                          About Ads
                        </a>
                        <a href="#" className="hover:text-white">
                          Accessibility
                        </a>
                      </div>

                      <div className="text-sm text-zinc-400">© 2025 Spotify AB</div>
                    </div>
                  </footer>
                </div>
              </div>
  )
}

export default Premium