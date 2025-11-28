# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<!-- Thinking Process -->
<!-- 1. Workflow Planning -->
<!-- 2.1. Board Functions (Hardcoded) -->
<!-- 2.2. Board Functions (Generated) -->
<!-- 3. Input Functions -->
<!-- 4. Movement Functions -->
<!-- 5. Game Rule Functions -->
<!-- 6. Game Play Loop -->

[Back to Table of Contents](#table-of-contents)

---
## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>
<img src="pic/flow.png">

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>
เอาค่าในแต่ละแถวมาเรียงต่อกัน >> print ออกมาทีละแถว
## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>
รับค่าจำนวนแถว จำนวนคอลลัม และจำนวนความหนาแน่นของหลุมที่ต้องการ </br>
-> สร้างกระดานที่มีแต่ช่องว่าง </br>
-> วนลูปสุ่มสร้างหลุมไปเรื่อยๆจนครบจำนวนที่ต้องการโดยที่ต้องสร้างจากช่องที่เป็นช่องว่างเท่านั้น </br>
-> สุ่มสร้างตัวผู้เล่นพร้อมกับเก็บค่าโดยมีเงื่อนไขว่าจะต้องเป็นที่ว่างที่เหลืออยู่เท่านั้น </br>
-> สุ่มสร้างหมวกพร้อมเก้บค่าเข้าตัวแปรโดยที่ต้องเป้นที่ที่เคยเป็นช่องว่างเท่านั้น </br>
เอาค่าในแต่ละแถวมาเรียงต่อกัน >> print ออกมาทีละแถว

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>
รับ input แล้วเอาไปทำให้เป้นตัวพิมพ์เล็กก่อน แล้วจากนั้นเอาไปเช็คว่าใช่คีย์ที่เราต้องการมั้ย (w,a,s,d) แล้ว retern ค่า input ที่เป้นstring ออกไปเพื่อเอาไปใช้เดินตัว player อีกที
## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>
รับพารามิเตอร์จาก input มาแยกเคสตามค่าที่รับมาเป็น </br>
บน/ w ล่าง/ s ซ้าย/ a ขวา/ d </br>
จากนั้นเช็คว่าตำแหน่งปัจจุบันของ player นั้นถ้าเดินไปในทิศทางของ input แล้วจะยังอยู่ในกระดานหรือไม่ ถ้าออกนอกกระดานก็จะทำให้เกมจบ </br>
แล้วเปลี่ยนแปลงค่าตำแหน่งของ player

จากนั้นจึงทำการอัพเดตกระดาน โดยที่เช็คว่าตำแหน่งที่มานั้นเจอหลุมหรือหมวกรึเปล่าเพื่อเป็นเงื่อนไขในการจบเกม ถ้าไม่เจอหมวกหรือหลุม ก็ให้อัพเดตกระดานตรงช่องนั้นให้กลายเป็น player 
## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>
เช็คเงื่อนไขว่า 1) player ตกกระดานมั้ย 2) เจอหมวกมั้ย 3) เจอหลุมมั้ย ถ้าข้อใดข้อหนึุ่งนี้เป็นจริงจะทำการออกมาจาก loop ที่เป็น gameloop เพื่อไปสรุปและแสดงผลลัพธ์
## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

<span style="">gameplay loop 
 รับ input ->  เดิน player -> อัพเดตกระดาน -> เช็คเงื่อนไข ถ้าจริงก็จะออกจากลูป แต่ถ้าเท็จก็จะลูปวนไปเรื่อยๆ แล้วหลังจากนั้นก้จะ แสดงผลแพ้ชนะจากเงื่อนไขที่เก็บมา
 </span>