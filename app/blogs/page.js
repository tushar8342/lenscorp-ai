import Header from "@/components/header/Header";
import React from "react";

function Blogs() {
  return (
    <div>
      <Header className="mt-4" />{" "}
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Under Development</h1>
          <p class="text-lg">This page is currently under development.</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
