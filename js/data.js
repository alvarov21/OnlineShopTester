const catalog = {
  camisetas: [
    { name: 'Essential Oversize Negra', price: 34.90, img: 'https://images.openai.com/static-rsc-4/UWV-PO8LGR1tTstG1DJwFVEbOLLx6AJK9ZPuKgDhcNa77dDbRs_is1SH_p-rariKDlE3pdVhrKrWk2ANrwHXiDll2S-bloOS3WvghhumLxutDaS8u3ncweed9Kb-TD7OOzhbUVnx3YR4R8RHMzH3nTRSAHxfPOiQBZo1tyT7IWRTDkSOoqcz00usOPqZ9F96?purpose=fullsize' },
    { name: 'Essential Blanca', price: 34.90, img: 'https://images.openai.com/static-rsc-4/RZDpOJRgX1kLllQY8bYzPjeHL8D_fNpC2Z-0_Tt934sIDCVpCQbnq1gYJ22yYvkb6DLS97C5VBWvLlvMRLfrWfoddQoTPXs9kPhm3RVeOl6IJA2-6DQzn0clLXnOou0z9ydqTX1oOJsrkmLQkLgtbAqtPn2079QpAjGwA8WuwIEc9MntVDkfT1dHa6SxG7Lb?purpose=fullsize' },
    { name: 'Arena Premium', price: 36.90, img: 'https://images.openai.com/static-rsc-4/I4cP5ouTpDuiwsJK9c_m-ec5I98tuOMgdC01VTCJFd8Z5Dx3Qg5E_QLFULf3evQNjMmsaZujPp1B22KyRzQMb9MG1HJkJhvpIfih7FXbClSusOMMDN6Eo8Phi5gTFKLkC68ryXF11NlDOm8lRBmqcu_18H3wawQZyuM0vud3jFg8wFvlAy_LSnRv4BeLuXo7?purpose=fullsize' },
    { name: 'Navy Classic', price: 34.90, img: 'https://images.openai.com/static-rsc-4/TusXNs40LKH_wSvG9hDy7N5idFF1Z9OuG_nV0hRh2gGaf52wxPhrnjfVJy8P2UTkM9_gEV9FRjC4pa-7fSGjLodQUcsAaEI1vgBaBwbuu2mAK6Ez2BkZkOMXnU4g3g5slPHbqO4RNiHOpoCyryVeXrxx3zN0kIpOrXMD33DrqFymHZ7vBYq2y3qBxcRsFBcJ?purpose=fullsize' },
    { name: 'Forest Green', price: 36.90, img: 'https://images.openai.com/static-rsc-4/UWV-PO8LGR1tTstG1DJwFVEbOLLx6AJK9ZPuKgDhcNa77dDbRs_is1SH_p-rariKDlE3pdVhrKrWk2ANrwHXiDll2S-bloOS3WvghhumLxutDaS8u3ncweed9Kb-TD7OOzhbUVnx3YR4R8RHMzH3nTRSAHxfPOiQBZo1tyT7IWRTDkSOoqcz00usOPqZ9F96?purpose=fullsize' }, // Reusing image to fill
    { name: 'Stone Grey', price: 34.90, img: 'https://images.openai.com/static-rsc-4/RZDpOJRgX1kLllQY8bYzPjeHL8D_fNpC2Z-0_Tt934sIDCVpCQbnq1gYJ22yYvkb6DLS97C5VBWvLlvMRLfrWfoddQoTPXs9kPhm3RVeOl6IJA2-6DQzn0clLXnOou0z9ydqTX1oOJsrkmLQkLgtbAqtPn2079QpAjGwA8WuwIEc9MntVDkfT1dHa6SxG7Lb?purpose=fullsize' }
  ],
  sudaderas: [
    { name: 'Hoodie Black Essential', price: 64.90, img: 'https://images.openai.com/static-rsc-4/FeLX6wPxoOYhrMfrl1CWqEUfUUEmgF_Ei9_lcMtfImpJg7ZCUhDdHyOMb4vypFPAihZjJvyui0FLC-1kGYXQohLT2-lb1BQjN5TgqhkpREvwun9p6aitgDiCespfU6oo6YumJDmDLSE4yeESswRKSBGpherL-4oV0-axBRaQMlpuhzc6RwoFQWaoYFVK04aT?purpose=fullsize' },
    { name: 'Cream Premium', price: 69.90, img: 'https://images.openai.com/static-rsc-4/r9GmS-iEeOOSw8tKVCL9PGm3yCMJeR7NR_j-5uduxZSXLWvb3C0zkVxi2CIAMn9D4I2x9yQKVNXNc1hoXxMxBh91iWxyBdeCqjAmm9ZPc2sS6hsogm_C5BqMi2OcWOo-1nt4kdC8GoULQhulax0uoqkTp1N26rkdgPtvDi2XRQuhCTzywDok3h9Jn1jQ83Oi?purpose=fullsize' },
    { name: 'Grey Heavy', price: 64.90, img: 'https://images.openai.com/static-rsc-4/SdSEmAyq9GuLpwM_c9px7ZDtoHBg6splG8iQr7Yb90vfaKE4UR0cr3MeN6vkArYJdo1Ba6tXtNJNoUdHqj_AozAzTyWAJWhvonzdQY-l3j4BaBu4NNk22eWpZMseRDPFa4ZltGtggRyOxZU6gGVygTwnG1XcY_9CKr8WUHkmoL_J1uAAmYKZseZwSNT_-pXy?purpose=fullsize' },
    { name: 'Navy Signature', price: 69.90, img: 'https://images.openai.com/static-rsc-4/IAEQQRutk5_kWu6C_GtF19mmDzTL9Glkp_a5zvLjUAdwKKNN018fejkC1iLJeaYhNk9fb0PrynWkFZuu0h9mo42ttf03vqX0dKCIEfeJgTap5FpYfiRILaZQ1KyqkfeUUsEL5NGP4tJnLyLKNedHkptRMIvKBt80XscbdRyy6FN4KMjOhvMKZiDy0AyMJfDw?purpose=fullsize' }
  ],
  pantalones: [
    { name: 'Cargo Black', price: 69.90, img: 'https://images.openai.com/static-rsc-4/Sj-NhjwIMvuXKOLuNeRyFo8bhfR7pSWKlK7TcH6wBHhD8rnW-wwQZPwbhZF7bBwGNgmRfm7KgoFSajh_-leDGnt4cJ0WyrmKE8aUx9RHQ34PuuwsHIBOOmZOFIVCPJCYxhHF4r8EXRtjNVkWC5zvMRKntW_45sq4SSgRXPLg7gdPepLIL33Y5Z93wUSGqnKB?purpose=fullsize' },
    { name: 'Chino Beige', price: 59.90, img: 'https://images.openai.com/static-rsc-4/_xWKRUTOKZUVgpvBfG9OspY7jA9fhw39dfUzmmm7L6zFxQkrIyz_oo8780D7FrN7SvifcNwFcz4cQjVebKChs1fTvu0_QkgcMup4ww22LLBCK4_acAGABQKWZh_a5f4I15iwuFF-IvTT8hs4pl3QS8q4ZXOTos3kcJrQAMfOv6y3GnJBJvlPnAQIqMG8MGW2?purpose=fullsize' },
    { name: 'Denim Dark', price: 74.90, img: 'https://images.openai.com/static-rsc-4/v-DX9KD5uc1Ki3VNO39bjAnLGdvafqXmkYT5FddKqqgBrpiBDOdxWhTBGKK_5XXMQ8G-UU7R6AS7C9dzvlepFK08wQrvNi2Y7mYV96eOEcjTrYboMPEWHjkOwImBpzR70DgvhYkqnZAFIXbugv_2ssYY1cf2Bmm6sjgDbANPPTxZtYG6TnGKZH3XbqiDid3J?purpose=fullsize' },
    { name: 'Jogger Grey', price: 54.90, img: 'https://images.openai.com/static-rsc-4/Q3uF4xKP3AbLg6uTDSzg0pZb15ddxv0IpU6xMAzoxQ-pQ-zR7hLEvuuy4HgVhGyAVvCtzn9EHoHWoCmJDmCyz1piBf7gSnJapfZG63Cp8NVGE8GhB1Dm1Nh0MRuFwZK2r9ZamMaDVlgu_q7JIZOZM-I293t7q-zsCB9FK6dxXyuHOqw7GuIvVA8vW3IkRF2b?purpose=fullsize' }
  ],
  gorras: [
    { name: 'Essential Black Cap', price: 29.90, img: 'https://images.openai.com/static-rsc-4/M5aBVw8fqwSqj6UGvUXlS6_MsGaMz7n7Nc9F4VTdFyzpz276hEC1jdyuA3JGOv7Pi_O0VHIw5cIS4nLItaO8IVk4Dm1TmFAKCsdzyR9rpY0Ujr9hvM7W1a5v20VNglYjF7TyOXdc4K5S4kPOtZmlqVL5rP87EaHCRj5IY27hZXgS35-BHcHm3wIigEJxDRAx?purpose=fullsize' },
    { name: 'White Edition', price: 29.90, img: 'https://images.openai.com/static-rsc-4/cvg-YbmWMLk2s03cJyRYdSX70cB8UmR4Y-qZjZA7EKF2pfy_WeJRIThugAsGaj75-SzkXxhNrZ55pGAa0MgCQ2uT9KBJ1YTlKd_yLAq7JZ1ERPnOwBWfnpHV77r4km0i4Crxewi4S-xSD5IYO7tZvd_vDL7ygk8Xhb7UqlMuZEdXODeGknJT7ffAKQ1OpFLg?purpose=fullsize' },
    { name: 'Sand Premium', price: 32.90, img: 'https://images.openai.com/static-rsc-4/cUtDifJLq7ArkuFe4dUtsG3e0d9kYXQfvYEPFm5RcwgnGsvKd0DEAfe19gokMVnM0esV9Y1GUv6XltSNwz2Tf2-2ZxxEbBCDjulcIFWwwjV5FdOcSitmzaLMloAOXY9bvW7qPKz4eqdQ-ebsl3uEi06dl4SC9rm3HQ8FVxO-A_maOMjb3NOKdelb7_GJD8Lp?purpose=fullsize' },
    { name: 'Navy Logo', price: 29.90, img: 'https://images.openai.com/static-rsc-4/iNgJtKCdzGOSrHSeKPQ_9X_5nXVVvqz8v2F9dIMEVlGxCHvEKU7xw592eUvXxJJDz5v_mUxitZ2RXPkJ5McUvZTJB0pyUVvnbroeFamOKSYvxzLsDY4zttIOzXUS0J7kRFTID28JQMl1FhUGTYs37p0SyObcZKIV7JdBEwi_Uxi5aYeeVWeabSTqnrcuIo5c?purpose=fullsize' }
  ],
  carteras: [
    { name: 'Leather Wallet Black', price: 49.90, img: 'https://images.openai.com/static-rsc-4/dtYVpfvYXWvvpEGW8RPjDXzj-IUJRJDByLScx_A_J1dJeJeIPqv5zrWKOZlTyOCqClWVBVJm7xNXbMA6Kgi5L7r0Uu5SYIWV_phif7T-RsBQii_nyvY-3SPLlrk5rijsP8nfYNihqUhVWM51oMVjmjUx_yiwFey_oByJA_RZfhnmhUJj53weaf58A4pNFhY2?purpose=fullsize' },
    { name: 'Brown Classic', price: 49.90, img: 'https://images.openai.com/static-rsc-4/LhHNTu9Wr3WNJXWcX-ZUnm96-q8QkRVVkAb_gHKQe7oqeBZ4YbA-OEbNINXA-yV0hhwINgBo_Z1rWrCh8sFRKa4SLRM6ua1eYq20hj9GkZfIFsH9rR_3RiYgemceIab-eqodDgjv_T1F7mCiSLGnxsYqjUYb6EnVymdFP3AHd8ykZ5gmf4k-dS5tiOzGk3Q5?purpose=fullsize' },
    { name: 'Slim Wallet', price: 44.90, img: 'https://images.openai.com/static-rsc-4/2qvYckQ4Vtei1rhrIqdjcJNh6pRgRWN3i4lvs8axHkSrP_zI59_RP1gEPfsr8sVR0sw-6OAhuQDRnQrKhh9qvqc8AcXMK1u_rMDZvkFXF-oImnUrTYsjHIZWp3zfGEaMCwbeoOFDCfaVo5IK0daPJrgYoEsAirX1dDyliwULXAPuoHjPMbCGA6mzYttq0WF8?purpose=fullsize' },
    { name: 'Card Holder', price: 34.90, img: 'https://images.openai.com/static-rsc-4/VYO3gl8JXAjPnAO6yzwkOO-syTescTN36vhNsCFP77e2-iOhJ7jK6xRN1qvIg4iSGBfcaKVY74hHmGjTEZZWRkwf1TGng66LpmV4Z9sxZPr85rMbMdABk1AozKxW6z2psAIz4TSFgp4GG2NegGq7fIK2p85l8WFsor3Xw11vi9fZ1vddDuaqlP1sgKoA20D4?purpose=fullsize' }
  ],
  corbatas: [
    { name: 'Silk Black', price: 39.90, img: 'https://images.openai.com/static-rsc-4/KOUZPVo5SZy7BTutbx1VurrJA4b54BM5rG2GcHKLFjFg7heajtpoylOSWfun7tz8cdfvgDXW0J1XdD12FGUxvVy4Qcv2mnQjUSdlqzHwvWLZ-b05qJgmofnD879NVN8KZvK47hdNBh96fuzyzcGH4zEib5LiCoBcFRZ0Ksorq6uJlcY5eI9Lfg4GtWwdHDB7?purpose=fullsize' },
    { name: 'Navy Executive', price: 39.90, img: 'https://images.openai.com/static-rsc-4/hk-hZc56JkhCJf8tUH1bhcnTWuiuUZGd-qxAxYD6B_4RUhqkbfmaoAGYuqb2PQ69nEFg2TqE_wOHeMlztWYlDM01XUyKbbnbmNwgXwBJx5xopi7QCwEYgwrTJ0mVSLkUhoVA2GuOQC9nt73gIBQbfhwRV_WoN8Ek3x7-RS48B9vQ1DBZWVi9Srh5mJyf7PrA?purpose=fullsize' },
    { name: 'Burgundy Premium', price: 42.90, img: 'https://images.openai.com/static-rsc-4/EdJj5g7GOxMDVNu_1dMMYUiS0mk1_bJP8ELrZr13al_ndQW1YpRo4Idj8HL4L8mxJMRdj3hPvGZ32NZU2J6Vl7TdfqnBqBXGXgQrSpXME94PAasFXLhXe9dFdKvmjGMMrec6UCtjkfWrOZc0N0JR9Jv5oZSQIby9oVynxIfioj0ih97wXPNqb8CiNRK2Xtlc?purpose=fullsize' },
    { name: 'Grey Texture', price: 39.90, img: 'https://images.openai.com/static-rsc-4/d4s5hEtILmczQeigjPBPILLVxKiXloIBDOSz-oyd6n2Bf1uAgv9c0iKfcFswWtcITTQ63ryKWnGKlwIb_BAZFLEOrWBo8P1hG1zhKat0etbQm8DcFr5bJZFd2EoENEPpOqOZ6RfaTu6D6ef_9LdI7lkQNlQvbDs_5-1y7O7meU-qXRdBlqUopcUX4Lh8Bh9q?purpose=fullsize' }
  ]
};

// Add ID to each product based on name
Object.keys(catalog).forEach(category => {
  catalog[category].forEach(product => {
    product.id = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  });
});
